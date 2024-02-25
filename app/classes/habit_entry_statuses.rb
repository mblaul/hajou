class HabitEntryStatuses
  EXCELLENT = 5
  GOOD = 4
  OKAY = 3
  BAD = 2
  HORRIBLE = 1

  def self.valid_status?(value)
    valid_status_values = constants.map { |status_constant| const_get status_constant }
    valid_status_values.include? value
  end

  def self.to_tuples
    tuples = constants.map do |status_constant|
      [status_constant.to_s.titleize, (const_get status_constant)]
    end
    tuples.sort_by { |tuple| tuple[1] }.reverse
  end
end
