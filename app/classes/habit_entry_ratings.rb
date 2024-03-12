class HabitEntryRatings
  EXCELLENT = 5
  GOOD = 4
  OKAY = 3
  BAD = 2
  HORRIBLE = 1

  def self.valid_raiting?(value)
    valid_rating_values = constants.map { |rating_constant| const_get rating_constant }
    valid_rating_values.include? value
  end

  def self.to_tuples
    tuples = constants.map do |rating_constant|
      [rating_constant.to_s.titleize, (const_get rating_constant)]
    end
    tuples.sort_by { |tuple| tuple[1] }.reverse
  end
end
