require_relative '../config/boot'
require_relative '../config/environment'

module Clockwork
  handler do |job, time|
    puts "Running #{job}, at #{time}"
  end

  every(10.seconds, 'ExchangeRateJob') do
    ExchangeRateJob.perform_later
  end
end