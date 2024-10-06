export const DonationFormQuestions = () => {
    return [
      {
        key: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "John Okafor"
      },
      {
        key: "amount",
        label: "Amount to donate",
        type: "number",
      },
      {
        key: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email address"
      },
      {
        key: "testimonial",
        label: "Testimonial",
        type: "textarea",
        placeholder: "Anything good to say about Lodgefinder?"
      },
    ];
  };