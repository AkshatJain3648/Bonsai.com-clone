const closeMenu = document.querySelector('.closeMenu')
const navigation = document.querySelector('.navigation')
const navigationList = document.querySelector('.navigation-list')
const buttons = document.querySelector('.buttons')
const openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', () => {
    navigation.style.display = 'flex'
    buttons.style.display = 'flex'
    navigationList.style.display = 'flex'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click' , () => {
    navigation.style.display = 'none'
    buttons.style.display = 'none'
    navigationList.style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
})
