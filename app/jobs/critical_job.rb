class CriticalJob < ApplicationJob
  queue_as :critical

  def perform(id)
    puts "Exec CriticalJob #{id}"
  end
end
