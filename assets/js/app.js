// Carousel Slider
$('.carousel').carousel({
  interval: 5000,
  pause: 'hover'
});

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Google Analytics Ad Tracking 
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-145138474-1');

// Rental Reservation Modal Form Validation
// & hidden input filler
$('#rental-form-submit').on('click', (e) => {

  const validateInput = (id) => {
    if ($('#' + id).val() == null || $('#' + id).val() == '') {
      $('#' + id).addClass('is-invalid');
      return false;
    } else {
      $('#' + id).removeClass('is-invalid');
      return true;
    }
  };

  if (!validateInput('name')) {
    return false;
  }
  if (!validateInput('email')) {
    return false;
  }
  if (!validateInput('phone')) {
    return false;
  }
  if (!validateInput('pick-up-date')) {
    return false;
  }
  if (!validateInput('drop-off-date')) {
    return false;
  }
  if (!validateInput('num-of-bikes')) {
    return false;
  }
  if (!validateInput('num-of-ebikes')) {
    return false;
  }
  if (!validateInput('rider-heights')) {
    return false;
  }

  const pickUpDate = $('#pick-up-date').val().split('-');
  $('#pick-up-year').val(pickUpDate[0]);
  $('#pick-up-month').val(pickUpDate[1]);
  $('#pick-up-day').val(pickUpDate[2]);

  const pickUpTime = $('#pick-up-time').val().split(':');
  $('#pick-up-hour').val(pickUpTime[0]);
  $('#pick-up-min').val(pickUpTime[1]);

  const dropOffDate = $('#drop-off-date').val().split('-');
  $('#drop-off-year').val(dropOffDate[0]);
  $('#drop-off-month').val(dropOffDate[1]);
  $('#drop-off-day').val(dropOffDate[2]);

  const dropOffTime = $('#drop-off-time').val().split(':');
  $('#drop-off-hour').val(dropOffTime[0]);
  $('#drop-off-min').val(dropOffTime[1]);
});