class CreateHabitEntries < ActiveRecord::Migration[7.1]
  def change
    create_table :habit_entries do |t|
      t.references :habit, null: false, foreign_key: true
      t.integer :rating
      t.text :notes
      t.datetime :start
      t.datetime :end
      t.integer :duration

      t.timestamps
    end
  end
end
