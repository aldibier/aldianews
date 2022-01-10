const addStateAndCity = (state, city) => {
  let sumoSelect = state.querySelector('.SumoSelect') || state.querySelector('select');
  let labelState = state.querySelector('label');
  let labelCity = city.querySelector('label');
  let selectState = state.querySelector('select');
  let inputCity = city.querySelector('input');

  sumoSelect.setAttribute('tabindex', '0');
  state.classList.remove('disabled');
  city.classList.remove('disabled');

  labelState.classList.add('js-form-required', 'form-required');
  selectState.classList.add('required');
  selectState.setAttribute('required', 'required')
  selectState.setAttribute('aria-required', 'true');
  selectState.removeAttribute('disabled')

  labelCity.classList.add('js-form-required', 'form-required')
  inputCity.classList.add('required');
  inputCity.setAttribute('required', 'required')
  inputCity.setAttribute('aria-required', 'true');
  inputCity.removeAttribute('disabled');
}

const removeStateAndCity = (state, city) => {
  let sumoSelect = state.querySelector('.SumoSelect') || state.querySelector('select');;
  let labelState = state.querySelector('label');
  let labelCity = city.querySelector('label');
  let selectState = state.querySelector('select');
  let inputCity = city.querySelector('input');

  if (state.classList.contains('disabled') || city.classList.contains('disabled')) return;

  sumoSelect.setAttribute('tabindex', '-1');
  state.classList.add('disabled');
  city.classList.add('disabled');

  labelState.classList.remove('js-form-required', 'form-required');
  selectState.classList.remove('required');
  selectState.removeAttribute('required');
  selectState.removeAttribute('aria-required');
  selectState.setAttribute('disabled', 'disabled');

  labelCity.classList.remove('js-form-required', 'form-required');
  inputCity.classList.remove('required');
  inputCity.removeAttribute('required');
  inputCity.removeAttribute('aria-required');
  inputCity.setAttribute('disabled', 'disabled')
}

const validateFormSponsorship = (form) => {
  if (!form) return;
  const selectCountry = form.querySelector('select[name="address[country]"]');
  const filedCountry = form.querySelector('.form-item-address-country');
  const fieldState = form.querySelector('.form-item-address-state-province');
  const fieldCity = form.querySelector('.form-item-address-city');
  const selectParent = selectCountry.parentElement;
  const countriesItems = selectParent.querySelectorAll('.opt');

  const contrySelected = selectCountry.value;
  //disabled at startup
  if (contrySelected.toLocaleLowerCase() != "united states" || contrySelected.toLocaleLowerCase() != "estados unidos") removeStateAndCity(fieldState, fieldCity);

  //reorder fields 
  filedCountry.insertAdjacentElement('afterend', fieldState);
  fieldState.insertAdjacentElement('afterend', fieldCity);

  if (form.classList.contains('webform-submission-sponsorship-upcoming-event-form')) {
    const budgetEvent = document.querySelector('.form-item-budget');
    fieldCity.insertAdjacentElement('afterend', budgetEvent)
  }

  countriesItems.forEach(item => item.addEventListener('click', (event) => {
    if (event.target.innerText.toLowerCase() === 'united states' || event.target.innerText.toLowerCase() === 'estados unidos') {
      addStateAndCity(fieldState, fieldCity);
    } else {
      removeStateAndCity(fieldState, fieldCity);
    }
  }));
}

const unitedStateFirst = (form) => {
  const selectCountry = form.querySelector('select[id*="edit-address-country"]');
	const sumoselectCountry = form.querySelector('div[class*="sumo_address[country]"]');
  let optionToMove = selectCountry.querySelector('option[value="United States"]');

  if (!optionToMove) {
    optionToMove = selectCountry.querySelector('option[value="Estados Unidos"]');
  }

  const optionFirst = selectCountry.firstElementChild;

  if (!!optionToMove) {
    optionFirst.insertAdjacentElement('afterend', optionToMove);
  }

	const formItems = sumoselectCountry.querySelectorAll('.opt');
  const formItemsText = sumoselectCountry.querySelectorAll('.opt label');

	//reorder items
	formItems.forEach(item => {
		const label = item.querySelector('label');

		if (label.textContent == "United States" || label.textContent == "Estados Unidos") {
			formItems[0].insertAdjacentElement('afterend', item);
		}

	})

  if (!!formItems) {
    //add styles
    formItemsText.forEach(item => {
      if (item.textContent == "United States" || item.textContent == "Estados Unidos") {
        item.style.borderBottom = "3px solid #b1b1b1";
      }
    })
  }
}

export {validateFormSponsorship, unitedStateFirst }
