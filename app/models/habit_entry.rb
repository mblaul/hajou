class HabitEntry < ApplicationRecord
  belongs_to :habit

  after_initialize :set_defaults
  after_validation :calucate_duration, if: -> { will_save_change_to_start? || will_save_change_to_end? }

  def set_defaults
    self.start ||= Time.now
  end

  def calucate_duration
    self.duration = self.end.to_i - self.start.to_i
  end
end
