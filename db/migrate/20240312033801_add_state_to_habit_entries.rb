class AddStateToHabitEntries < ActiveRecord::Migration[7.1]
  def change
    add_column :habit_entries, :state, :string, default: HabitEntry::STATES[:running] || 'running'
  end
end
