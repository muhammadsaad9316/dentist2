---
name: subagent-driven-development
description: Dispatches subagents to handle tasks independently. Use for parallelizing work or handling complex tasks with specialized focus.
---

# Subagent-Driven Development

## When to Use
- **Tasks mostly independent?**
- **Stay in this session?**
- **Have implementation plan?**

**vs. Executing Plans (parallel session):**
- Same session (no context switch)
- Fresh subagent per task (no context pollution)
- Two-stage review after each task: spec compliance first, then code quality
- Faster iteration (no human-in-loop between tasks)

## The Process

### Per Task Cycle
1. **Dispatch Implementer**
   - Provide full task text and context
   - Answer questions if asked
2. **Review - Phase 1: Spec Compliance**
   - Dispatch *spec reviewer* subagent
   - Verify code matches requirements
   - Fix gaps until compliant
3. **Review - Phase 2: Code Quality**
   - Dispatch *code quality reviewer* subagent
   - Verify patterns, cleanliness, tests
   - Fix issues until approved
4. **Complete**
   - Mark task complete
   - Move to next task

### Final Review
- Dispatch final code reviewer for entire implementation
- Verify integration and overall quality

## Prompt Templates
- Implementer: "You are an expert implementer..."
- Spec Reviewer: "You are a strict requirements auditor..."
- Quality Reviewer: "You are a senior code craftsman..."

## Advantages
- Subagents follow TDD naturally
- Fresh context per task (no confusion)
- Parallel-safe (subagents don't interfere in separate folders)
- Subagent can ask questions (before AND during work)
- Quality gates (Self-review -> Spec -> Code Quality)

## Red Flags
- Skipping reviews (spec compliance OR code quality)
- Proceeding with unfixed issues
- Dispatching multiple implementation subagents in parallel (if they touch same files)
- Ignoring subagent questions
- Starting code quality review before spec compliance is passed
