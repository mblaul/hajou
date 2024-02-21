class HabitEntriesController < ApplicationController
  before_action :set_habit_entry, only: %i[show edit update destroy stop_timer]

  def index
    @habit_entries = HabitEntry.all
  end

  def show; end

  def new
    @habit_entry = HabitEntry.new
  end

  def edit; end

  def create
    @habit_entry = HabitEntry.new(habit_entry_params)

    if @habit_entry.save
      respond_to do |format|
        format.html { redirect_to habit_entries_path }
        format.turbo_stream do
          render turbo_stream: turbo_stream.replace('in_progress_habit_entry', partial: 'edit',
                                                                               locals: { habit_entry: @habit_entry })
        end
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @habit_entry.update(habit_entry_params)
      redirect_to habit_entry_url(@habit_entry), notice: 'Habit entry was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @habit_entry.destroy!

    redirect_to habit_entries_url, notice: 'Habit entry was successfully destroyed.'
  end

  def stop_timer
    @habit_entry.end = DateTime.now

    return unless @habit_entry.save

    respond_to do |format|
      format.html { redirect_to habit_entries_path }
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace('in_progress_habit_entry', partial: 'rate',
                                                                             locals: { habit_entry: @habit_entry })
      end
    end
  end

  private

  def set_habit_entry
    @habit_entry = HabitEntry.find(params[:id])
  end

  def habit_entry_params
    params.require(:habit_entry).permit(:habit_id, :start, :end, :rating, :notes)
  end
end
