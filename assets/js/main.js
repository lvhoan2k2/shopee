const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const openAuthFormBtns = $$('.open-auth-form')
const openAuthFormWrappers = $$('.open-auth-form-wrapper')
const modal = $('.modal')
const modalOverlay = $('.modal__overlay')
const backBtns = $$('.auth-form__control-back')
const authForms = $$('.auth-form')
const switchBtns = $$('.auth-form__switch-btn')
const headerLogo = $('.header__logo')
const headerSearch = $('.header__search')
const headerSearchSelect = $('.header__search-select')
const headerSearchOption = $('.header__search-option')
const headerSearchOptionItems = $$('.header__search-option-item')
const headerSearchInput = $('.header__search-input')
const headerSearchHistory = $('.header__search-history')
const headerSearchHistoryItems = $$('.header__search-history-item')
const headerMobileSearchHistory = $('.header-mobile__search-history')
const itemOptionWrappers = $$('.item--option-wrapper')
const numberOfProduct = $('.header__cart-notice')
const headerCartItems = $$('.header__cart-item')
const headerNavbarUserContainer = $('.header__navbar-user-container')
const headerNavbarUserItems = $$('.header__navbar-user-item')
const containerFilterMenuBtns = $$('.container__filter-menu-btn')
const selectContainers = $$('.select-container')
const selectBtns = $$('.select-btn')
const itemOptionWithChecks = $$('.item--option-with-check')
const selectHoverBtns = $$('.select-hover-btn')
const currentPageElement = $('.container__filter-page-current')
const totalPageElement = $('.container__filter-page-total')
const productItems = $$('.product-item')
const likeWrappers = $$('.product-main__action-like')
const ratings = $$('.product-main__action-rating')
const prevBtns = $$('.prev-btn')
const nextBtns = $$('.next-btn')
const paginationPageWrapper = $('.pagination__page-wrapper')
const headerMobileTabletUser = $('.header-mobile-tablet__user')
const upDownArrowIcons = $$('.up-down-arrow-icon')
const headerMobileSearch = $('.header-mobile__search')
const headerMobileSearchIconWrapper = $('.header-mobile__search-icon-wrapper')
const headerCartItemDelete = $$('.header__cart-item-delete')
const headerMobileList = $('.header-mobile-list')
const categoryWrapper = $('.category-wrapper')
const categoryItemLinks = $$('.category-item__link')
const headerSortLinkSelect = $('.container-sort-bar__link-select')
const headerSortIconPrices = $$('.container-sort-bar__icon-price')
const containerSortBar = $('.container-sort-bar')
const containerSortBarItems = $$('.container-sort-bar__item')
const containerSortBarLinks = $$('.container-sort-bar__link-select .option-link')
const containerSortBarUnderline = $('.container-sort-bar__underline')
const upDownArrowIconWrapper = $('.up-down-arrow-icon-wrapper')
const headerMobileSearchOptionItems = $$('.header-mobile__search-option-item')
const headerMobileSearchInput = $('.header-mobile__search-input')
const placeHolders = [
    'Tìm trong shop này',
    'Tìm trong tất cả các shop'
]
var currentPage = 1
var totalPage = +totalPageElement.innerText

backBtns.forEach(function(backBtn) {
    backBtn.onclick = function() {
        modal.style = 'display: none';
    }
})

// Hide the modal when the user clicks on the area outside it
modalOverlay.onclick = function() {
    modal.style = 'display: none';
}

// show the register and login modal when the user clicks on the register or login button
openAuthFormWrappers.forEach(function(openAuthFormWrapper) {
    openAuthFormWrapper.onmouseover = function(e) {
        var openAuthFormBtns = e.currentTarget.querySelectorAll('.open-auth-form')
        openAuthFormBtns.forEach(function(openAuthFormBtn, index) {
            openAuthFormBtn.onclick = function() {
                modal.style = 'display: flex';
                authForms.forEach(function(authForm) {
                    authForm.classList.remove('active');
                })
                authForms[index].classList.add('active');
            }
        })
    }
})

// Display the register and login modal 
// when the user taps on the user icon in tablet and mobile layouts.
// headerMobileTabletUser.onclick = function() {
//     modal.style = 'display: flex';
//     authForms.forEach(function(authForm) {
//         authForm.classList.remove('active');
//     })
//     authForms[0].classList.add('active');
// }

function switchElement(switchBtnSelector, switchElementSelector, className) {
    var switchBtns = $$(switchBtnSelector)
    var switchElements = $$(switchElementSelector)
    switchBtns.forEach(function(switchBtn) {
        switchBtn.onclick = function() {
            switchElements.forEach(function(switchElement) {
                switchElement.classList.toggle(className);
            })
        }
    })
}

// When the user clicks the switch button, it toggles between the login and register forms
switchElement('.auth-form__switch-btn', '.auth-form', 'active')

// show and hide header search option when the user hovers on the search select button
selectHoverBtns.forEach(function(selectHoverBtn) {
    selectHoverBtn.onmouseover = function(e) {
        e.stopPropagation();
        var openElement = e.currentTarget.querySelector('.item--option-wrapper') || e.currentTarget.querySelector('.header__notif')
        openElement.classList.add('active');
    }
})

selectHoverBtns.forEach(function(selectHoverBtn) {
    selectHoverBtn.onmouseleave = function(e) {
        e.stopPropagation();
        var openElement = e.currentTarget.querySelector('.item--option-wrapper') || e.currentTarget.querySelector('.header__notif')
        openElement.classList.remove('active');
    }
})

// show and hide header search option when the user clicks on the search select button
// headerSearchSelect.onclick = function(e) {
//     e.stopPropagation();
//     headerSearchOption.classList.toggle('active');
// }

// Update the placeholder text of the header search input element
// based on the option selected by the user in the header search option element. 
headerSearchOptionItems.forEach(function(headerSearchOptionItem, index) {
    headerSearchOptionItem.onclick = function() {
        headerSearchInput.placeholder = placeHolders[index];
    }
})

// Similar with headerMobileSearchInput.placeholder
headerMobileSearchOptionItems.forEach(function(headerMobileSearchOptionItem, index) {
    headerMobileSearchOptionItem.onclick = function() {
        headerMobileSearchInput.placeholder = placeHolders[index];
    }
})

// change the content of the header search input when the users clicks on one of the options
// headerSearchHistoryItems.forEach(function(headerSearchHistoryItem) {
//     headerSearchHistoryItem.onclick = function() {
//         headerSearchHistory.classList.remove('active')
//         searchInput.value = this.innerText
// }
// })

// Display the header search history when the user clicks on the search input
// Avoid using the :focus css property, as it keeps the header search history open even 
// when the user clicks outside of the search input
headerSearchInput.onfocus = function(e) {
    e.stopPropagation()
    headerSearchHistory.classList.add('active')
}
headerMobileSearchInput.onfocus = function(e) {
    e.stopPropagation()
    headerMobileSearchHistory.classList.add('active')
}

// open the item--option-wrapper when the user clicks on one of the selectContainers
// selectBtns.forEach(function(selectBtn) {
//     selectBtn.onclick = function(e) {
//         e.stopPropagation()
//         var itemOptionWrapper = e.currentTarget.closest('.select-container').querySelector('.item--option-wrapper')
//         itemOptionWrapper.classList.add('active');
//     }
// })

// close all item--option-wrapper and change the content of the header search input
// when the users clicks on one of the options
// add the check mark when the user clicks on one of the item--options 
itemOptionWrappers.forEach(function(itemOptionWrapper) {
    itemOptionWrapper.onclick = function(e) {
        var itemOptionLink = e.target.closest('.option-link')
        var optionContent = e.target.closest('.select-container').querySelector('.option-content')
        if (e.target === itemOptionLink) {
            itemOptionWrapper.classList.remove('active')
            optionContent.textContent = itemOptionLink.textContent
            if (optionContent.value !== undefined) {
                optionContent.value = itemOptionLink.textContent
            }
        }
        var itemOptionWithChecks = e.currentTarget.querySelectorAll('.item--option-with-check')
        itemOptionWithChecks.forEach(function(itemOptionWithCheck) {
            itemOptionWithCheck.classList.remove('selected');
        })
        if (e.target.closest('.item--option-with-check')) {
            e.target.closest('.item--option-with-check').classList.add('selected');
        }
    }
})

// stop the propagation when the user clicks on the selectContainer element 
// which leads to removing the active class
selectContainers.forEach(function(selectContainer) {
    selectContainer.onclick = function(e) {
        e.stopPropagation();
    }
})

// Show the number of products that the user adds to the cart
numberOfProduct.innerText = headerCartItems.length
console.log();

// change the background color of the pseudo-element of the notification element 
// when the user clicks on one of the items in the notification

// headerNavbarUserItems[0].onmouseover = function() {
//     headerNavbarUserContainer.classList.add("hovering")
// }
// headerNavbarUserItems[0].onmouseleave = function() {
//     headerNavbarUserContainer.classList.remove("hovering")
// }

// Add class "btn--primary" to the containerFilterMenuBtn when the user clicks on one of the containerFilterMenuBtns
// containerFilterMenuBtns.forEach(function(containerFilterMenuBtn) {
//     containerFilterMenuBtn.onclick = function() {
//         containerFilterMenuBtns.forEach(function(containerFilterMenuBtn) {
//             containerFilterMenuBtn.classList.remove('btn--primary');
//         })
//         containerFilterMenuBtn.classList.add('btn--primary');
//     }
// })

// when the user clicks on an item, change its background color or text color.
// other items that are not selected should have the default background color or text color
function activateByclick(selector, className) {
    const selectorElements = $$(selector)
    selectorElements.forEach(function(selectorElement) {
        selectorElement.onclick = function() {
            selectorElements.forEach(function(selectorElement) {
                selectorElement.classList.remove(className)
            })
            selectorElement.classList.add(className)
        }
    })
}

activateByclick('.category-item', 'category-item-active')
activateByclick('.container__filter-menu-btn', 'btn--primary')
activateByclick('.container-filter-small__item-normal', 'active')
activateByclick('.container-sort-bar__link-normal', 'active')
// activateByclick('.pagination__number-btn', 'btn--primary')

// Change like button's color to the primary color when the user clicks on it
likeWrappers.forEach(function(likeWrapper) {
    likeWrapper.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle('active')
    }
})

// Check propagation
productItems.forEach(function(productItem) {
    productItem.onclick = function(e) {
        console.log('you also click on product item');
    }
})

// change the star's color to yellow when the user clicks on it
ratings.forEach(function(rating) {
    rating.onmouseover = function(e) {
        var stars = this.querySelectorAll('.product-main__action-star')
        stars.forEach(function(star, index) {
            star.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                stars.forEach(function(star) {
                    star.classList.remove('active')
                })
                for (var i = 0; i <= index; i++) {
                    stars[i].classList.add('active')
                }
            }
        })
    }
})

// Generate the pagination pages based on the total page number
for (var i = 0; i < totalPage; i++) {
    var paginationPageBtn = document.createElement('button')
    var pageNumber = document.createTextNode(i + 1)
    paginationPageBtn.classList.add('pagination__page-btn')
    paginationPageBtn.classList.add('btn')
    paginationPageBtn.classList.add('btn--small')
    paginationPageBtn.appendChild(pageNumber)
    paginationPageWrapper.appendChild(paginationPageBtn)
}

// load current page
function loadCurrentPage(currentPage) {
    var paginationPageBtns = paginationPageWrapper.querySelectorAll('.pagination__page-btn')
    paginationPageBtns.forEach(function(paginationPageBtn) {
        paginationPageBtn.classList.remove('btn--primary')
    })
    paginationPageBtns[currentPage - 1].classList.add('btn--primary')
}

// change the number of pages when the user clicks on the prev or next button
prevBtns.forEach(function(prevBtn) {
    prevBtn.onclick = function() {
        currentPage--
        if (currentPage < 1) {
            currentPage = totalPage
        }
        currentPageElement.innerText = currentPage
        loadCurrentPage(currentPage)
    }
})

nextBtns.forEach(function(nextBtn) {
    nextBtn.onclick = function() {
        currentPage++
        if (currentPage > totalPage) {
            currentPage = 1
        }
        currentPageElement.innerText = currentPage
        loadCurrentPage(currentPage)
    }
})

// change the page when the user clicks on the pagination page button
var paginationPageBtns = paginationPageWrapper.querySelectorAll('.pagination__page-btn')
paginationPageBtns.forEach(function(paginationPageBtn, index) {
    paginationPageBtn.onclick = function() {
        paginationPageBtns.forEach(function(paginationPageBtn) {
            paginationPageBtn.classList.remove('btn--primary')
        })
        paginationPageBtn.classList.add('btn--primary')
        currentPage = index + 1
        console.log(currentPage);
        currentPageElement.innerText = currentPage
    }
})

loadCurrentPage(currentPage)

// Display the icon pointing upwards or downwards 
// based on whether the price is in ascending or descending order.
containerSortBarLinks.forEach(function(containerSortBarLink, index) {
    containerSortBarLink.onclick = function(e) {
        upDownArrowIcons.forEach(function(upDownArrowIcon) {
            upDownArrowIcon.style = 'display: none;'
        })
        upDownArrowIcons[index].style = 'display: block;'
    }
})

// Display the header search, hide the header logo and header search icon
// when the user taps on the search icon on mobile display.
headerMobileSearchIconWrapper.onclick = function(e) {
    e.stopPropagation()
    headerMobileSearch.classList.toggle('active')
    // containerSortBar.classList.toggle('hidden')
    // setTimeout(function() {
    //     headerMobileSearchInput.click()
    //     headerMobileSearchInput.focus()
    // }, 1000)
    // headerMobileSearchInput.focus()

}

// close item--option-wrapper when the user selects one of the item-options
// close the header search history when the user clicks on the area outside of the search input
// close the header search, display the header logo and header search input
// when the user taps on the area outside the search icon on mobile display.
document.onclick = function() {
    headerSearch.classList.add('hide-on-mobile')
    // headerSearchHistory.classList.remove('active')
    itemOptionWrappers.forEach(function(itemOptionWrapper) {
        itemOptionWrapper.classList.remove('active')
    })
    headerMobileSearch.classList.remove('active')
    // containerSortBar.classList.remove('hidden')
    headerMobileList.classList.remove('open')
}

// Delete the product from the cart when the user clicks on the trash can icon next to it
function deleteProduct(deleteBtnSelector, deleteElementSelector) {
    var deleteBtns = $$(deleteBtnSelector)
    deleteBtns.forEach(function(deleteBtn) {
        deleteBtn.onclick = function(e) {
            e.target.closest(deleteElementSelector).style.display = 'none'
        }
    })
}
deleteProduct('.header__cart-item-delete', '.header__cart-item')
deleteProduct('.header__cart-item-delete-icon', '.header__cart-item')


// Show or hide element when the user clicks on the toggle button
function showElement(openBtnSelector, openElementSelector, className) {
    var openBtn = $(openBtnSelector)
    var openElement = $(openElementSelector)
    openBtn.onclick = function(e) {
        e.stopPropagation()
        openElement.classList.toggle(className)
        console.log('you have clicked');
    }
}
showElement('.header-mobile-list-icon', '.header-mobile-list', 'open')

// Show or hide header notification when the user clicks on the header cart wrapper
// const headerCartWrap = $('.header__cart-wrap')
// const headerCartHasCart = $('.header__cart-has-cart')
// headerCartWrap.onclick = function () {
//     if (headerCartHasCart.classList.contains('active')) {
//         headerCartHasCart.classList.remove('active')
//     }    
//     headerCartHasCart.classList.add('active')
// }
// showElement('.header__cart-wrap', '.header__cart-has-cart', 'active')


// Hide the mobile list on mobile devices when the users click on one of the categoryItemLinks
function closeElement(closeBtnSelector, closeElementSelector, className) {
    var closeBtns = $$(closeBtnSelector)
    var closeElement = $(closeElementSelector)
    closeBtns.forEach(function(closeBtn) {
        closeBtn.onclick = function() {
            closeElement.classList.remove(className)
        }
    })
}
closeElement('.header-mobile-list__item-link', '.header-mobile-list', 'open')

// Stop propagation
categoryWrapper.onclick = function(e) {
    e.stopPropagation()
}

headerMobileList.onclick = function(e) {
    e.stopPropagation()
}

// On mobile display, when the user clicks on the price option button,
// display an arrow icon (either up or down) next to it
// This button toggles between ascending and descending price order
// When the user clicks the switch button, it toggles between ascending and descending price order
headerSortLinkSelect.onclick = function () {
    upDownArrowIconWrapper.style.display = 'none'
    headerSortIconPrices[0].classList.toggle('active')
    switchElement('.container-sort-bar__link-select', '.container-sort-bar__icon-price', 'active')
}

// Show the underline of the container sort bar item when the user clicks on it
containerSortBarItems.forEach(function(containerSortBarItem, index) {
    var containerSortBarItemWidth = containerSortBarItem.offsetWidth
    containerSortBarUnderline.style.width = `${containerSortBarItemWidth}px`;
    containerSortBarItem.onclick = function (e) {
        containerSortBarUnderline.style = `
        width: ${containerSortBarItemWidth}px;
        transform: translateX(calc(${containerSortBarItemWidth}px * ${index})) 
        `
    }
})