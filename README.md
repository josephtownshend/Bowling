# Bowling

### Weekend Challenge 5 - Bowling Scorecard

Started Sunday 30/06/19


### Logic

- 10 frames
  - 2 bowls per frame
    - Unless strike in which case only 1 bowl for frame
      - Strike is only made on first ball of frame - otherwise it's a spare

- Strike scores 10 + (next frame bowl 1 + next frame bowl 2)
- Spare scores 10 + next frame bowl 1

- It needs to count how many frames have been played
  - For the moment, stop at 10
    - Will implement logic for strike on final frame later

```
if bowl1 === 10
score += 10 + nextFrameBowl1 + nextFrameBowl2

else if bowl1 + bowl2 === 10
score += 10 + nextFrameBowl1

else if bowl1 + bowl2 === 0
score

else
score += bowl1 + bowl2
```
```
(var i = 0; i < 10; i++)
```

### Scoring

[x] User can enter the pins for each bowl and add to [frame]
[-] Will update score with each *FRAME* played
[-] Will *COUNT* how many frames have been played
