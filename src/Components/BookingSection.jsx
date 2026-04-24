import { useState } from "react";
import Button from "./common/Button";

const initialData = {
  name: "",
  mobile: "",
  packageName: "",
  message: "",
};

function BookingSection() {
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "", text: "Sending your request to the salon team..." });

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Failed to send booking request.");
      }

      setFormData(initialData);
      setStatus({
        type: "success",
        text:
          result.message ||
          "Your request has been sent successfully. We will contact you shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error.message ||
          "Something went wrong while sending your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta-section" id="booking">
      <div className="cta-bg"></div>
      <div className="cta-bg-lines"></div>
      <div className="cta-content reveal">
        <div className="cta-eyebrow">Your Transformation Awaits</div>
        <h2 className="cta-h2">
          Ready to Transform
          <br />
          Your <em>Look?</em>
        </h2>
        <p className="cta-p">
          Join hundreds of clients who trust Unique Beauty Salon for their most
          confident, radiant, and unforgettable moments. Book your appointment
          today.
        </p>

        <form className="cta-form" noValidate onSubmit={onSubmit}>
          <div className="cta-form-grid">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={onChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="+92 300 1234567"
                pattern="[0-9+\-\s]{7,20}"
                required
                value={formData.mobile}
                onChange={onChange}
              />
            </div>
            <div className="form-field full">
              <label htmlFor="packageName">Select Package</label>
              <select
                id="packageName"
                name="packageName"
                required
                value={formData.packageName}
                onChange={onChange}
              >
                <option value="">Choose a package</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Glow Day Package">Glow Day Package</option>
                <option value="Bridal Complete Package">
                  Bridal Complete Package
                </option>
                <option value="Monthly Glow Plan">Monthly Glow Plan</option>
                <option value="Relaxation & Beauty">Relaxation & Beauty</option>
                <option value="Party-Ready Package">Party-Ready Package</option>
                <option value="Custom Bundle">Custom Bundle</option>
              </select>
            </div>
            <div className="form-field full">
              <label htmlFor="message">Custom Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us your preferred date, services, and any special requests"
                required
                value={formData.message}
                onChange={onChange}
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <Button
              as="button"
              type="submit"
              className="cta-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Booking Request"}
            </Button>
            <Button
              href="https://wa.me/923225123701"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Us
            </Button>
          </div>

          <p className={`form-status ${status.type}`.trim()} aria-live="polite">
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}

export default BookingSection;
