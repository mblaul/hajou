class HabitEntry < ApplicationRecord
  belongs_to :habit

  STATES = {
    running: 'running',
    stopped: 'stopped',
    completed: 'completed'
  }.freeze

  state_machine initial: STATES[:stopped] do
    before_transition STATES[:running] => STATES[:stopped] do |habit_entry, _transition|
      habit_entry.duration = habit_entry.duration + (DateTime.now.to_i - habit_entry.start.to_i)
    end
    before_transition STATES[:stopped] => STATES[:running] do |habit_entry, _transition|
      habit_entry.start = DateTime.now
      habit_entry.end = nil
    end

    event :run do
      transition all => STATES[:running]
    end

    event :stop do
      transition STATES[:running] => STATES[:stopped]
    end

    event :complete do
      transition STATES[:stopped] => STATES[:completed]
    end
  end

  def toggle_timer
    case state
    when STATES[:running]
      stop!
    when STATES[:stopped]
      run!
    end
  end
end
