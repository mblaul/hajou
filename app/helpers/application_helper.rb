module ApplicationHelper
  def pretty_print_duration(duration = 0)
    return unless duration.is_a? Integer

    hours = duration / 3600
    minutes = (duration % 3600) / 60
    seconds = duration % 60

    result = ''
    result += "#{hours}hr " if hours > 0
    result += "#{minutes}min " if minutes > 0
    result += "#{seconds}sec " if seconds >= 0

    result
  end
end
