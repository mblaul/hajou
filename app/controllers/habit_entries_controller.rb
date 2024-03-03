class HabitEntriesController < ApplicationController
  before_action :set_habit_entry, only: %i[show edit update destroy toggle_timer]

  def index
    @habit_entries = HabitEntry.all
  end

  def show; end

  def new
    @habit_entry = HabitEntry.new
  end

  def edit
    @habit_entry = HabitEntry.find(params[:id])
  end

  def create
    @habit_entry = HabitEntry.new(habit_entry_params)

    if @habit_entry.save
      redirect_to edit_habit_entry_path(@habit_entry)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @habit_entry.update(habit_entry_params)
      respond_to do |format|
        format.html { redirect_to @habit_entry.habit }
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @habit_entry.destroy!

    redirect_to habit_entries_url, notice: 'Habit entry was successfully destroyed.'
  end

  def toggle_timer
    @habit_entry.toggle_timer

    return unless @habit_entry.save

    respond_to(&:turbo_stream)
  end

  private

  def set_habit_entry
    @habit_entry = HabitEntry.find(params[:id])
  end

  def habit_entry_params
    params.require(:habit_entry).permit(:habit_id, :start, :end, :rating, :notes)
  end
end
