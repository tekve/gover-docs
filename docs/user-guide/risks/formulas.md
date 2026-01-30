---
sidebar_position: 6
---

# Risk Scoring Formulas

Configure how risk scores are calculated in your workspace.

## What are Formulas?

Formulas define how assessment field values combine to produce a risk score.

```
Risk Score = f(Field1, Field2, ..., FieldN)
```

## Managing Formulas

Navigate to **Risks** → **Settings** → **Score Formulas**

### Create a Formula

1. Click **New Formula**
2. Enter formula details:
   - **Title** — Formula name
   - **Description** — What it calculates
3. Build the formula expression
4. Configure risk level mappings
5. Save

### Formula Builder

Build formulas using:

| Element | Example |
|---------|---------|
| **Fields** | `Likelihood`, `Impact` |
| **Operators** | `+`, `-`, `×`, `÷` |
| **Numbers** | `0.5`, `10` |
| **Parentheses** | `(a + b) × c` |

### Example Formulas

**Simple Multiplication**
```
Likelihood × Impact
```

**Weighted Average**
```
(Likelihood × 0.4) + (Impact × 0.6)
```

**Complex Formula**
```
((Likelihood × Impact) + (Financial × 0.3)) / 2
```

## Risk Level Mappings

Map score ranges to risk levels:

| Score Range | Level | Action |
|-------------|-------|--------|
| 20-25 | Critical | Immediate action required |
| 15-19 | High | Priority treatment |
| 10-14 | Medium | Plan treatment |
| 5-9 | Low | Monitor |
| 1-4 | Very Low | Accept |

### Configuring Mappings

1. Open a formula
2. Go to **Risk Levels** tab
3. Set score ranges for each level
4. Assign colors
5. Save

## Assessment Fields

Formulas use assessment fields as inputs.

### Managing Fields

Navigate to **Risks** → **Settings** → **Score Fields**

### Create a Field

1. Click **Add Field**
2. Configure:
   - **Name** — Field identifier
   - **Label** — Display name
   - **Type** — Scale type
   - **Min/Max** — Value range
3. Save

### Field Types

| Type | Description |
|------|-------------|
| **Scale** | Numeric scale (e.g., 1-5) |
| **Dropdown** | Predefined options |
| **Number** | Free numeric entry |

## Default vs Active

- **Default Formula** — Used for new assessments
- **Active Formulas** — Available for selection

Set a formula as default:
1. Open the formula
2. Toggle **Set as Default**
3. Save

## Best Practices

1. **Keep it simple** — Complex formulas are hard to explain
2. **Document rationale** — Explain why you chose the formula
3. **Test thoroughly** — Verify calculations before using
4. **Align with methodology** — Match your risk framework
5. **Review periodically** — Formulas may need adjustment

## Next Steps

- [Risk Assessments](./risk-assessments) — Use formulas in assessments
- [Admin Guide](../../admin-guide/organization-settings) — Organization-wide settings
