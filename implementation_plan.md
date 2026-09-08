# Comprehensive Data Synchronization Plan

## Goal Description
Make the Admin Panel and Supabase the Single Source of Truth for all prices (Tests, Packages, Settings, Services), eliminating duplicate hardcoded values, ensuring safe soft-deletions, and fixing stale price bugs in the booking flow while preserving historical booking accuracy.

## Proposed Changes

### 1. Central API Fixes (`src/lib/api.ts`)
- **Fix fetchPackages / fetchTests**: Ensure `is_active === false` is filtered out properly for public fetches so deactivated items are not displayed.
- **Settings unification**: Remove duplicate promo fallback logic. Let `app_settings` be purely a fallback or point directly to the underlying `t139`/`t140` prices in the DB to avoid competing hardcoded logic.

### 2. Cart & Booking Price Verification (`src/context/CartContext.tsx` & `src/routes/book.tsx`)
- **Stale Price Protection**: Modify `CartContext` so that when `selectedTests` or `selectedPackages` are loaded from `localStorage`, they are actively reconciled against the latest DB prices if available, OR inside `book.tsx`, ensure the submitted price reads strictly from a live DB query rather than the serialized cart object.
- **Booking Snapshot**: Ensure `price_at_booking` accurately snapshots the live DB price (e.g. `t.price`) into the JSON payloads without touching historical records.

### 3. Deletion / Deactivation Logic (`src/routes/admin/index.tsx`)
- The admin panel already uses `is_active = false` (soft delete) instead of hard deletes via `.delete()`. We will audit this to ensure it's universally applied across tests, packages, and cancer services.
- Ensure package toggleStatus uses `.update()` securely instead of `.upsert()` with missing fields.

### 4. Duplicate/Hardcoded Price Cleanup
- **EntryPopup**: Change `EntryPopup` to rely entirely on the DB prices of `t139` (Blood Sugar) and `t140` (Thyroid) instead of reading from `app_settings.promos`. The tests table becomes the SSOT.
- **Admin Settings UI**: Remove the "Promotional Highlights" price edit fields from `SettingsManager` to prevent creating a parallel state, pointing the user to edit the tests `t139` and `t140` in the Test Directory directly.
- **Site Settings / Constants**: Remove any remnant `₹299` and `₹49` strings in the application if they bypass the test logic.

## Verification Plan
1. **Test Edit Flow**: Edit a test price in the admin panel and verify it instantly reflects on the public site and in checkout.
2. **Package Edit Flow**: Edit a package price and verify the same.
3. **Deactivate Flow**: Deactivate a test/package and confirm it vanishes from public search and booking but remains in admin.
4. **Stale Cart Flow**: Add an item to the cart, edit its price in the DB, and proceed to checkout to ensure the cart correctly intercepts and updates the price to the live DB version.
5. **Historical Integrity**: Verify that `update()` operations on tests do not cascade or alter JSON/relational rows for old bookings.
