---
sidebar_position: 4
---

# Task Statuses

Configure the workflow statuses for your tasks.

## Default Statuses

Gover provides default statuses:

| Status | Type | Description |
|--------|------|-------------|
| **Task** | Open | Not started |
| **In Progress** | In Progress | Work underway |
| **In Review** | In Progress | Awaiting review |
| **Done** | Closed | Completed |

## Managing Statuses

Navigate to **Tasks** → **Settings** → **Statuses**

### Create a Status

1. Click **Add Status**
2. Enter:
   - **Name** — Status label
   - **Type** — Open, In Progress, or Closed
   - **Color** — Visual indicator
   - **Order** — Position in workflow
3. Save

### Edit a Status

1. Click on a status
2. Modify details
3. Save changes

### Delete a Status

1. Select a status
2. Click **Delete**
3. Choose what to do with tasks in that status:
   - Move to another status
   - Keep as is (status becomes inactive)

### Reorder Statuses

Drag and drop statuses to change their order in the workflow.

## Status Types

| Type | Meaning | Kanban |
|------|---------|--------|
| **Open** | Work not started | Left columns |
| **In Progress** | Work underway | Middle columns |
| **Closed** | Work complete | Right columns |

## Status Colors

Assign colors for visual distinction:

- 🔵 Blue — Open/Task
- 🟡 Yellow — In Progress
- 🟣 Purple — In Review
- 🟢 Green — Done
- 🔴 Red — Blocked

## Workflow Examples

### Simple Workflow

```
Task → In Progress → Done
```

### Review Workflow

```
Task → In Progress → In Review → Done
```

### Approval Workflow

```
Draft → Submitted → Approved → Done
       ↓
    Rejected → Draft
```

## Best Practices

1. **Keep it simple** — Don't create too many statuses
2. **Use clear names** — Status should be self-explanatory
3. **Define transitions** — Know how tasks move between statuses
4. **Color code** — Use consistent colors
5. **Review periodically** — Adjust workflow as needed

## Next Steps

- [Kanban Board](./kanban) — Use statuses in Kanban
- [Tasks Overview](./overview) — Return to overview
