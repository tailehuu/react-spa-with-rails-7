class LowJob < ApplicationJob
  queue_as :low

  def perform(id)
    puts "Exec LowJob #{id}"
  end
end
