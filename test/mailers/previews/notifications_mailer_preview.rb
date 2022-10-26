# Preview all emails at http://localhost:3000/rails/mailers/notifications_mailer
class NotificationsMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/notifications_mailer/hello
  def hello
    NotificationsMailer.hello
  end

  # Preview this email at http://localhost:3000/rails/mailers/notifications_mailer/bye
  def bye
    NotificationsMailer.bye
  end

end
