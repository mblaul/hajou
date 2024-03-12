class FormField
  def initialize(name: nil, type: nil, options: nil)
    @name = name
    @type = type
    @options = options
  end

  attr_accessor :name, :type, :options
end
