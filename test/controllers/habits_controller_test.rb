require 'test_helper'

class HabitsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get habits_url
    assert_response :success
  end

  test 'should get redirected to running habit entry' do
    @habit = habits(:habit_with_running_entry)
    get habit_url(@habit)
    assert_redirected_to edit_habit_entry_url(@habit.habit_entries.find_by(state: HabitEntry::STATES[:running]))
  end
end
