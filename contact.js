// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyIaAdWzyDytMuCL0MJ7rXUkfn2SvQoO9msjCxMoCtDC0mzhvMMfyd_A9QG81Y4b_uu/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

function reload() {
    window.location.reload();
    alert('Form Submitted');
}