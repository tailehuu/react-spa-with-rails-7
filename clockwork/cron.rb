require_relative '../config/boot'
require_relative '../config/environment'

module Clockwork
  handler do |job, time|
    puts "Running #{job}, at #{time}"
  end

  every(5.minutes, 'ExchangeRateJob') do
    1.upto(20).each do |id|
      ExchangeRateJob.perform_later(id)
    end
  end

  every(5.minutes, 'CriticalJob') do
    1.upto(20).each do |id|
      CriticalJob.perform_later(id)
    end
  end

  every(5.minutes, 'LowJob') do
    1.upto(20).each do |id|
      LowJob.perform_later(id)
    end
  end
end