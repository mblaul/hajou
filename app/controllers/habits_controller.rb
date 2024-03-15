class HabitsController < ApplicationController
  before_action :set_habit, only: %i[show edit update destroy]

  def index
    @habits = Habit.all
  end

  def show
    redirect_to edit_habit_entry_path @habit.habit_entries.last if @habit.pending_habit_entry?
    @habit
  end

  def new
    @item = Habit.new
    @form_name = form_name
    @form_fields = form_fields
  end

  def create
    @habit = Habit.new(habit_params)

    if @habit.save
      redirect_to @habit
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @item = @habit
    @form_name = form_name
    @form_fields = form_fields
  end

  def update
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

  def set_habit
    @habit = Habit.find(params[:id])
  end

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
