---
sidebar_position: 2
---

# Adding Frameworks

Learn how to add compliance frameworks to your Gover workspace.

## Methods to Add Frameworks

### 1. From Templates

The fastest way to get started with standard frameworks.

1. Navigate to **Frameworks** → **Add Framework**
2. Select **Templates**
3. Browse available frameworks (ISO 27001, GDPR, NIS2, etc.)
4. Click **Add to Workspace**

<!-- TODO: Add GIF showing template selection -->

:::tip
Templates include the complete requirement structure, ready for you to map controls.
:::

### 2. From Content Hub

Access community and marketplace frameworks.

1. Go to **Frameworks** → **Add Framework**
2. Select **Content Hub**
3. Browse **Discovery** for available frameworks
4. Click **Install** to add to your workspace

### 3. Custom Framework

Create your own framework from scratch.

1. Navigate to **Frameworks** → **Add Framework**
2. Select **Custom**
3. Enter framework details:
   - Name
   - Description
   - Version
4. Add categories and requirements manually

## Framework Settings

After adding a framework, configure its settings:

### General Settings
- **Name** — Display name for the framework
- **Description** — Overview of the framework
- **Version** — Framework version number

### Custom Fields
Add custom fields to requirements for additional tracking:
- Text fields
- Select dropdowns
- Date fields
- Number fields

### Categories
Organize requirements into logical groups:
- Create category hierarchy
- Drag and drop to reorder
- Assign colors for visual distinction

## Importing Requirements

For custom frameworks, you can bulk import requirements:

1. Open the framework
2. Go to **Settings** → **Import**
3. Upload a CSV or Excel file with requirements
4. Map columns to Gover fields
5. Review and confirm import

### Import Format

| Column | Required | Description |
|--------|----------|-------------|
| `identifier` | Yes | Unique requirement ID |
| `title` | Yes | Requirement title |
| `description` | No | Detailed description |
| `category` | No | Parent category path |

## Best Practices

1. **Start with templates** — Use pre-built frameworks when available
2. **Review before mapping** — Understand requirements before adding controls
3. **Use consistent naming** — Follow a naming convention for custom frameworks
4. **Version control** — Track framework versions as standards update

## Next Steps

- [Requirements](./requirements) — Work with framework requirements
- [Readiness Tracking](./readiness-tracking) — Monitor compliance progress
