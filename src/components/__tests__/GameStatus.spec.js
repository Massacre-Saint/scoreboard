import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import GameStatus from '../GameStatus.vue'

describe('GameStatus', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(GameStatus, {
      props: {
        blueTeam: { name: 'Blue Team', score: 0 },
        redTeam: { name: 'Red Team', score: 0 }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('shows when a team is leading by a single point', () => {
    const wrapper = shallowMount(GameStatus, {
      props: {
        blueTeam: { name: 'Blue Team', score: 1 },
        redTeam: { name: 'Red Team', score: 0 }
      }
    })
    expect(wrapper.text()).toBe('Blue Team is leading by 1 point')
  })

  it('should display the game is tied', () => {
    const wrapper = shallowMount(GameStatus, {
      props: {
        blueTeam: { name: 'Blue Team', score: 0 },
        redTeam: { name: 'Red Team', score: 0 }
      }
    })
    expect(wrapper.text()).toBe('The game is currently tied')
  })

  it('shows when a team is leading by multiple points', () => {
    const wrapper = shallowMount(GameStatus, {
      props: {
        blueTeam: { name: 'Blue Team', score: 2 },
        redTeam: { name: 'Red Team', score: 0 }
      }
    })
    expect(wrapper.text()).toBe('Blue Team is leading by 2 points')
  })
})
