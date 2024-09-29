import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  successMessage: boolean = false; // Variable to track success message

  sendEmail(e: Event) {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      reply_to: this.email,  // Use the user's email address for replies
      message: this.message,
    };

    emailjs.send('service_nvy8xop', 'template_wmv3skt', templateParams, '4PkGe2pSHP3wYMzoG')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      // Resetting form fields
      this.name = '';
      this.email = '';
      this.message = '';

// Hide the success message after 5 seconds
      setTimeout(() => {
        this.successMessage = false;
      }, 5000);
    }, (err) => {
      console.error('Failed to send email. Error: ', err);
    });
  }
}
