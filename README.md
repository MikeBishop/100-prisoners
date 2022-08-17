# The 100 Prisoners Problem

A solution and simulation of the 100 Prisoners Problem

## Description

The director of a prison offers 100 prisoners, who are numbered from 1 to 100, a chance to bust out of this joint. 

A room contains a cupboard with 100 drawers, labeled 1 to 100. 

The director randomly puts one prisoner's number in each closed drawer. 

The prisoners enter the room, one after another. Each prisoner may open and look into at most 50 drawers in any order. The drawers are closed again afterwards. 

If, during this search, every prisoner finds their number in one of the drawers, all prisoners are pardoned. 

If just one prisoner does not find his number within 50 drawers, then the deal is off. No one leaves.

Before the first prisoner enters the room, the prisoners may discuss strategy — but may not communicate once the first prisoner enters to look in the drawers. 

What is the prisoners' best strategy?

## Strategies

1. The prisoners randomly try drawers     
    &nbsp;

    What’s the probability of success?  
    &nbsp;
    For 2 prisoners: ½ * ½ = ¼ = 25%
    For 100 prisoners: ½ * ½ … * ½ * ½ = (1/2)100
    &nbsp;
    Pr ≈ 0.000000000000000000000000000008
    <br/>
2. The prisoners agree beforehand to use this approach:

    a. Each prisoner first opens the drawer with his number. For example, prisoner #75 would open drawer #75.
    &nbsp;
  
    b. If the drawer contains his number, then he’s done. He shuts the drawer and leaves.
    &nbsp;  
    c. If the drawer contains a number that is not his and this was his 50th drawer, then everyone loses. The prisoner leaves the room and has a very long night.
    &nbsp;
    d. If the drawer contains a number that is not his and this was not his 50th drawer, he shuts the current drawer and then opens the drawer corresponding to the new number. For example, if drawer #75 contains #10, the next drawer to be opened is drawer #10.  
    &nbsp;    
    e. Go to step b.
    &nbsp;

    What’s the probability of success?  
    &nbsp;
    Pr ≈ 0.31183 ≈ 31.18%!!!!!!!!!!!!!!!!!
    &nbsp;
    For a discussion of the math behind this:
    &nbsp;
    https://datagenetics.com/blog/december42014/index.html
    &nbsp;

## Your assignment

Your assignment:

1. Create 2 implementations of the 100 Prisoners Problem, each corresponding to the 2 strategies described earlier.

2. Run a large number of simulations on each strategy and compile statistics on how often each one failed and how often they succeeded.

3. Compare the empirical results with the probabilities.


## Starter Projects

Starter projects in C#, Java, Kotlin, and Javascript are located in this repo:

https://github.com/Ingage-Meetup/C3ProjectTemplate
