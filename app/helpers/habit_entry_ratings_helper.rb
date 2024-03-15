module HabitEntryRatingsHelper
  def habit_entry_rating_to_icon(habit_entry_rating_value)
    return '😶' if habit_entry_rating_value.blank?

    icons = {
      1 => '🤬',
      2 => '😠',
      3 => '😌',
      4 => '😀',
      5 => '😎'
    }
    icons[habit_entry_rating_value]
  end
end
