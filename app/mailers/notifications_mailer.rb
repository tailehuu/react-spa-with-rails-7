class NotificationsMailer < ApplicationMailer
  default from: 'react-spa-with-rails-7@gmail.com'

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifications_mailer.hello.subject
  #
  def hello
    @greeting = "Hello"

    mail to: "lhtai181@gmail.com", subject: "Hello from the App"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifications_mailer.bye.subject
  #
  def bye
    @greeting = "Bye"

    mail to: "lhtai181@gmail.com", subject: "Goodbye from the App"
  end
end
