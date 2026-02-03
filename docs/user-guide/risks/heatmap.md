---
sidebar_position: 5
---

# Risk Heatmap

The risk heatmap provides a visual representation of your risk landscape.

## What is a Risk Heatmap?

A heatmap displays risks on a grid based on:

- **X-axis**: Likelihood (probability)
- **Y-axis**: Impact (severity)

Risks cluster in cells showing their relative priority.

```
        Impact
     Low  Med  High
    ┌────┬────┬────┐
Hi │ 🟡 │ 🟠 │ 🔴 │
    ├────┼────┼────┤  Likelihood
Me │ 🟢 │ 🟡 │ 🟠 │
    ├────┼────┼────┤
Lo │ 🟢 │ 🟢 │ 🟡 │
    └────┴────┴────┘
```

## Viewing the Heatmap

1. Navigate to **Risks**
2. Click **Overview** or **Heatmap** view
3. See risks plotted by likelihood and impact

## Reading the Heatmap

### Colors

| Color | Meaning |
|-------|---------|
| 🔴 Red | Critical - Immediate attention |
| 🟠 Orange | High - Priority treatment |
| 🟡 Yellow | Medium - Monitor closely |
| 🟢 Green | Low - Acceptable risk |

### Risk Count

Each cell shows the number of risks in that category.

### Drill Down

Click on a cell to see the specific risks in that category.

## Heatmap Types

### Inherent Risk Heatmap

Shows risks before controls are applied.

- Baseline risk picture
- Identifies highest raw risks

### Residual Risk Heatmap

Shows risks after controls are applied.

- Current risk exposure
- Measures control effectiveness

### Comparison View

Inherent vs residual side by side:

- See risk reduction
- Identify treatment gaps

## Filtering the Heatmap

Filter risks displayed on the heatmap:

- **Category** — Show specific risk categories
- **Owner** — Show risks by owner
- **Status** — Show by treatment status
- **Tags** — Filter by tags

## Using the Heatmap

### Prioritization

Focus on risks in the red zone first.

### Reporting

Export heatmap for management reports.

### Trend Analysis

Compare heatmaps over time to see improvement.

### Gap Analysis

Identify areas with concentrated risks.

## Best Practices

1. **Review regularly** — Check heatmap in risk meetings
2. **Compare views** — Look at both inherent and residual
3. **Drill down** — Investigate clusters of high risks
4. **Track movement** — Watch for risks moving between zones
5. **Share with stakeholders** — Visual communication is powerful

## Next Steps

- [Formulas](./formulas) — Configure risk scoring
- [Risk Treatment](./risk-treatment) — Address high-priority risks
