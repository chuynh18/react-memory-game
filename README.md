React memory game
=================

How to play
-----------

The objective of the game is to click on each picture only once.  After each click, the order of the pictures is randomized.  Clicking on the same picture again will cause your score to be reset to zero.  However, your high score is preserved (at least until you refresh the page.)

Developer comments
------------------

Not much to say about this, other than it was my first time playing around in React.  I'm still trying to get used to the React way of doing things, and it definitely feels a little constraining from time to time.  However, I understand (a little bit) the design philosophy behind React, and how this helps keep large(r) web applications more maintainable and performant.

Only comment I have about the actual implementation is that I was going to just write my own (naive) random function for shuffling the order of images.  However, I decided to do a quick search online to find shuffling algorithms and ended up finding the [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) shuffle.  It's an efficient and fair shuffle algorithm.  I ended up finding out that the naive algorithm I would have written is [actually biased](https://blog.codinghorror.com/the-danger-of-naivete/).