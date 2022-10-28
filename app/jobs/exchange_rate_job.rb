class ExchangeRateJob < ApplicationJob
  queue_as :default

  def perform(id)
    puts "Exec ExchangeRateJob #{id}"
  end
end
