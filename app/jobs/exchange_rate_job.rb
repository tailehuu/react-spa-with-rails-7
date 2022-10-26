class ExchangeRateJob < ApplicationJob
  queue_as :default

  def perform(*args)
    puts "=> Call API to fetch the latest Exchange Rate"
  end
end
