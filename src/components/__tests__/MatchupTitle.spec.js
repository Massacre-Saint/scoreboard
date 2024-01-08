import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MatchupTitle from '../MatchupTitle.vue'

describe('MatchupTitle', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        blueTeam: { name: 'Blue Team', score: 0 },
        redTeam: { name: 'Red Team', score: 0 }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('should display a header with the two team names', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        blueTeam: { name: 'Blue Team', score: 0 },
        redTeam: { name: 'Red Team', score: 0 }
      }
    })
    expect(wrapper.text()).toBe('Blue Team vs. Red Team')
  })

  it('should highlight team 1 if they are winning', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        blueTeam: { name: 'Blue Team', score: 5 },
        redTeam: { name: 'Red Team', score: 0 }
      }
    })
    const blueTeamHeader = wrapper.find('.blueTeam')
    const redTeamHeader = wrapper.find('.redTeam')
  
    expect(blueTeamHeader.classes()).toContain('winning')
    expect(redTeamHeader.classes()).not.toContain('winning')
  })

  it('should not highlight any team if the score is tied', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        blueTeam: { name: 'Blue Team', score: 5},
        redTeam: { name: 'Red Team', score: 5 }
      }
    })
    const blueTeamHeader = wrapper.find('.blueTeam')
    const redTeamHeader = wrapper.find('.redTeam')

    expect(blueTeamHeader.classes()).not.toContain('winning')
    expect(redTeamHeader.classes()).not.toContain('winning')
  })
})
