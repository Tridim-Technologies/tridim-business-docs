# Sales and job delivery

Use this guide to take a customer request from a customer record through a quotation and into a job. The current app supports these steps for internal alpha use with synthetic information only.

## Before you start

- Sign in to an organization where you have an active membership.
- Use synthetic customer and quotation information.
- To add or edit customers, you need the owner, admin, sales, or operations role. To create and send quotations, you need owner, admin, or sales. An owner, admin, or operations member can accept a sent quotation and create its job.

## Add a customer

1. Open **Customers** and use **Add a customer**.
2. Enter a business or customer name. Contact person, email, and phone are optional.
3. Select **Add customer**.
4. To change contact details later, choose **Edit** on the record. Use **Archive** to remove it from active selections while keeping its existing quotation and job links; archived records can be restored.

Customer names must be unique within the organization. Keep the customer in the same organization as the work you are quoting.

## Create and send a quotation

1. Open **Quotations** and choose **New quotation**.
2. Select an active customer, set a three-letter currency code and a validity date, and enter at least one service line with a description, quantity, and unit price.
3. Choose **Save draft**. Check the line details and validity date in the quotation register.
4. Choose **Send** when the draft is ready to be shared with the customer outside the app.
5. If the scope or price needs changing, choose **Create revision**. This makes a new draft revision and preserves the earlier version.

The app records quotation status changes. It does not calculate tax or display a calculated quotation total. Treat entered line prices as the values you supplied and prepare the customer-facing quotation through your approved process.

## Accept a quotation and manage its job

1. An owner, admin, or operations member selects **Accept & create job** on a sent quotation after the customer has accepted it.
2. Open **Jobs** to find the linked job. An accepted quotation creates one linked job.
3. An owner, admin, or operations member can assign organization members, set a due date, and move the job through its available statuses.
4. Add delivery updates in **Delivery notes**. Assigned employees can add notes to their jobs too.
5. The assigned team records time from the job card. When work is complete, a job manager can set its status to **Completed**.
6. An owner, admin, or operations member can record inventory quantities used for the job. Choose active products and locations, enter quantities and a reason, then submit. The linked stock issue movements reduce on-hand quantities and appear in both histories.

## Expected result

The quotation history shows its status and revisions. Once accepted, the quotation links to a job where the team can record assignments, delivery status, notes, time, and quantity-only material usage.

## Current limits

- A quotation must be unexpired when it is accepted.
- Tax and quotation totals are not calculated.
- Accepting a quotation creates a job; it does not automatically invoice the customer. A job must be completed before an invoice can be issued.
- This internal alpha is not a public hosted service. Do not enter real customer data.
