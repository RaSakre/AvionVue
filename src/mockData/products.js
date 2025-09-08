import { ref } from "vue"
import chair from '../assets/ceramics-products/chair.png'
import vases from '../assets/ceramics-products/vases.png'
import lamp from '../assets/ceramics-products/lamp.png'
import vase from '../assets/ceramics-products/vases.png'
import darkChair from '../assets/popular-products/darkChair.png'
import sofa from '../assets/popular-products/large-sofa.png'
import { v4 as uuidv4 } from 'uuid'

export const ceramicsProducts = ref([
    {
        id: uuidv4(),
        img: chair,
        alt: 'Chair',
        title: 'The Dandy chair',
        price: '£250'
    },
    {
        id: uuidv4(),
        img: vases,
        alt: 'Vases',
        title: 'Rustic Vase Set',
        price: '£155'
    },
    {
        id: uuidv4(),
        img: vase,
        alt: 'Vase',
        title: 'The Silky Vase',
        price: '£125'
    },
    {
        id: uuidv4(),
        img: lamp,
        alt: 'Lamp',
        title: 'The Lucy Lamp',
        price: '£399'
    }
])

export const popularProducts = ref([
    {
        id: uuidv4(),
        img: sofa,
        alt: 'Sofa',
        title: 'The Poplar suede sofa',
        price: '£980',
        sizeClass: 'col-lg-6'
    },
    {
        id: uuidv4(),
        img: chair,
        alt: 'Chair',
        title: 'The Dandy chair',
        price: '£250'
    },
    {
        id: uuidv4(),
        img: darkChair,
        alt: 'Dark Chair',
        title: 'The Dandy Chair',
        price: '£250'
    },
])