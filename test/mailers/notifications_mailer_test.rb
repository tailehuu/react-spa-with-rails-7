require "test_helper"

class NotificationsMailerTest < ActionMailer::TestCase
  test "hello" do
    mail = NotificationsMailer.hello
    assert_equal "Hello", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

  test "bye" do
    mail = NotificationsMailer.bye
    assert_equal "Bye", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
