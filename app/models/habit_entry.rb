class HabitEntry < ApplicationRecord
  belongs_to :habit

  after_initialize :set_defaults
  after_validation :calucate_duration, if: -> { will_save_change_to_start? || will_save_change_to_end? }

  def set_defaults
    self.start ||= DateTime.now
  end

  def calucate_duration
    self.duration += self.end.to_i - self.start.to_i if self.end && self.start
  end

  def toggle_timer
    if complete?
      self.start = DateTime.now
      self.end = nil
    else
      self.end = DateTime.now
    end
  end

  def complete?
    self.start.present? && self.end.present?
  end
end
