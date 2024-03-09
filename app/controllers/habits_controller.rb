class HabitsController < ApplicationController
  def index
    @habits = Habit.all
  end

  def show
    @habit = Habit.find(params[:id])
    redirect_to edit_habit_entry_path @habit.habit_entries.last if @habit.pending_habit_entry?
    @habit
  end

  def new
    @item = Habit.new
    @form_name = form_name
    @form_fields = form_fields
  end

  def create
    puts '$$$$$$$$$$ in Create'
    @habit = Habit.new(habit_params)

    if @habit.save
      redirect_to @habit
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @item = Habit.find(params[:id])
    @form_name = form_name
    @form_fields = form_fields
  end

  def update
    @habit = Habit.find(params[:id])
    if @habit.update(habit_params)
      redirect_to @habit
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @habit = Habit.find(params[:id])
    @habit.destroy

    redirect_to root_path, status: :see_other
  end

  private

  def habit_params
    params.require(:habit).permit(:name, :description)
  end

  def form_name
    'Habit'
  end

  def form_fields
    [
      FormField.new(name: 'name', type: 'text_field'),
      FormField.new(name: 'description', type: 'text_field')
    ]
  end
end
