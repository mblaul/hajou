class HabitEntriesController < ApplicationController
  before_action :set_habit_entry, only: %i[show edit update destroy toggle_timer]

  def show; end

  def new
    @habit_entry = HabitEntry.new
  end

  def edit
    @item = HabitEntry.find(params[:id])
    @form_name = 'Habit Entry'
    @form_fields = form_fields
    @hide = true
  end

  def create
    @habit_entry = HabitEntry.new(habit_entry_params)
    @habit_entry.run
    if @habit_entry.save
      redirect_to edit_habit_entry_path(@habit_entry)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    @habit_entry.complete
    if @habit_entry.update(habit_entry_params)
      @habit = @habit_entry.habit
      respond_to do |format|
        format.html { redirect_to @habit }
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
    @item = @habit_entry
    @form_name = 'Habit Entry'
    @form_fields = form_fields
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

  def form_fields
    [
      FormField.new(name: 'rating', type: 'select', options: [HabitEntryRatings.to_tuples, {}]),
      FormField.new(name: 'notes', type: 'text_area')
    ]
  end
end
