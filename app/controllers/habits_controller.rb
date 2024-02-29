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
    @habit = Habit.new
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
    @habit = Habit.find(params[:id])
  end

  def update
    @habit = Habit.new(habit_params)

    if @habit.save
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
end
