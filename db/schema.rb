# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 20_240_312_033_801) do
  create_table 'habit_entries', force: :cascade do |t|
    t.integer 'habit_id', null: false
    t.integer 'rating'
    t.text 'notes'
    t.datetime 'start'
    t.datetime 'end'
    t.integer 'duration', default: 0, null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string 'state', default: 'stopped'
    t.index ['habit_id'], name: 'index_habit_entries_on_habit_id'
  end

  create_table 'habits', force: :cascade do |t|
    t.string 'name'
    t.text 'description'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  add_foreign_key 'habit_entries', 'habits'
end
