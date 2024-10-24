module Jekyll
  module CustomFilters
    require 'time'

    def past(events, key)
      current_date = Time.now
      events.select do |event|
        event_end = parse_time(event[key])
        event_end < current_date
      end
    end

    def upcoming(events, key)
      current_date = Time.now
      events.select do |event|
        event_start = parse_time(event[key])
        event_start > current_date
      end
    end

    # Sorts events based on a date key
    def sort_by_date(events, key)
      events.sort_by do |event|
        parse_date(event[key])
      end
    end

    private
    
    # Converts a date string or object to a Time object
    def parse_date(date_value)
      case date_value
      when Time
        date_value
      when Date
        date_value.to_time
      when String
        Time.parse(date_value) rescue Time.now
      else
        Time.now # Fallback if date_value is not recognized
      end
    end

    def parse_time(value)
      case value
      when Time
        value
      when Date
        value.to_time
      else
        Time.parse(value.to_s)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)