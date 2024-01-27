import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function toggleMusicFloresta() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.buttonPressAudioFloresta.play()
        return
    }
    sounds.buttonPressAudioFloresta.pause()
}

export function toggleMusicChuva() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.buttonPressAudioChuva.play()
        return
    }
    sounds.buttonPressAudioChuva.pause()
}

export function toggleMusicCafeteria() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.buttonPressAudioCafeteria.play()
        return
    }
    sounds.buttonPressAudioCafeteria.pause()
}

export function toggleMusicLareira() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.buttonPressAudioLareira.play()
        return
    }
    sounds.buttonPressAudioLareira.pause()
}