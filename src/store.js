import { writable } from 'svelte/store';

/*
* boolen for if the question has been answered
*/
export const qOne = writable(0) // are you coming?
export const qTwo = writable(0) // little info about you
export const qThree = writable(0) // food for an adult
export const qFour = writable(0) // food for the kid

/*
* boolen for coming 1 = yes 0 = no
*/
export const qOneAnswer = writable(0) // coming yes or no
/*
* This is for the form if they are not coming
* will be 0 if the question has not been answered and filled with JSON Object if it has been answered
*/
export const qTwoAnswerOne = writable(0) // name phone email comment
/*
* This if for the form if they are coming
* will be 0 if the question has not been answered and filled with JSON Object if it has been answered
*/
export const qTwoAnswerTwo = writable(0) // name phone email comment adults children notes
/*
* This is for the Adult Food Choices 
* this will be if the question has not been answered and filled with an array json objects ( one for each perons )
*/
export const qThreeAnswer = writable(0) // food for each adult person
/*
* This is for the Child Food Choices 
* this will be if the question has not been answered and filled with an array json objects ( one for each perons )
*/
export const qFourAnswer = writable(0) // food for each child person

