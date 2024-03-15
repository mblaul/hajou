require 'test_helper'

class HabitEntriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @habit_entry = habit_entries(:habit_entry)
  end

  test 'should create habit_entry' do
    assert_difference('HabitEntry.count') do
      post habit_entries_url,
           params: {
             habit_entry: {
               habit_id: @habit_entry.habit_id
             }
           }
    end

    assert_redirected_to edit_habit_entry_url(HabitEntry.last)
  end

  test 'should get edit' do
    get edit_habit_entry_url(@habit_entry)
    assert_response :success
  end

  test 'should update habit_entry' do
    patch habit_entry_url(@habit_entry),
          params: {
            habit_entry: {
              notes: 'This was great',
              rating: HabitEntryRatings::EXCELLENT
            }
          }
    assert_redirected_to habit_url(@habit_entry.habit)
  end

  test 'should destroy habit_entry' do
    assert_difference('HabitEntry.count', -1) do
      delete habit_entry_url(@habit_entry)
    end

    assert_redirected_to habit_entries_url
  end
end
