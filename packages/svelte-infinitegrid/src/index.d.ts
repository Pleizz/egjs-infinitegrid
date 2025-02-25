import VanillaInfiniteGrid, {
  FrameInfiniteGridOptions, InfiniteGridMethods, InfiniteGridOptions, JustifiedInfiniteGridOptions,
  MasonryInfiniteGridOptions, PackingInfiniteGridOptions,
  InfiniteGridStatus,
} from "@egjs/Infinitegrid";
import { SvelteComponent } from "svelte/internal";

export interface SveltInfiniteGridOptions {
  items?: any[];
  useFirstRender?: boolean;
  usePlaceholder?: boolean;
  useLoading?: boolean;
  status?: InfiniteGridStatus;
  itemBy?: (item: any, index: number) => string | number;
  groupBy?: (item: any, index: number) => string | number;
  infoBy?: (item: any, index: number) => Record<string, any>;
}

export default abstract class InfiniteGrid<T extends InfiniteGridOptions> extends SvelteComponent {
  $$prop_def: Record<string, any> & SveltInfiniteGridOptions & T;
  getInstance(): VanillaInfiniteGrid;
}

export default interface InfiniteGrid<T extends InfiniteGridOptions> extends InfiniteGridMethods<InfiniteGrid<T>> {
  // eslint-disable-next-line semi
}

export class MasonryInfiniteGrid extends InfiniteGrid<MasonryInfiniteGridOptions> { }
export class JustifiedInfiniteGrid extends InfiniteGrid<JustifiedInfiniteGridOptions> { }
export class FrameInfiniteGrid extends InfiniteGrid<FrameInfiniteGridOptions> { }
export class PackingInfiniteGrid extends InfiniteGrid<PackingInfiniteGridOptions> { }
