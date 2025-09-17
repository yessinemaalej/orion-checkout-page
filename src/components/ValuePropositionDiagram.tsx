import { 
  Leaf, 
  Wifi, 
  Globe, 
  Zap, 
  DollarSign, 
  TrendingUp,
  Battery,
  Satellite,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const ValuePropositionDiagram = () => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Ecosystem Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
        
        {/* Energy Source */}
        <div className="relative">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4 shadow-cosmic">
                <Leaf className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-success-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Renewable Energy</h3>
              <p className="text-sm text-muted-foreground">
                Solar + Wind Power
              </p>
              <div className="bg-gradient-card rounded-lg p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Cost</span>
                  <span className="text-success font-bold">$0/month</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow to Connectivity */}
          <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
            <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <div className="lg:hidden flex justify-center mt-4">
            <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>

        {/* Connectivity */}
        <div className="relative">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4 shadow-cosmic">
                <Satellite className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Wifi className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Starlink Connectivity</h3>
              <p className="text-sm text-muted-foreground">
                Global High-Speed Internet
              </p>
              <div className="bg-gradient-card rounded-lg p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Uptime</span>
                  <span className="text-success font-bold">99.9%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow to Validation */}
          <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
            <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <div className="lg:hidden flex justify-center mt-4">
            <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>

        {/* Validation */}
        <div className="relative">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4 shadow-cosmic">
                <Globe className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                <Battery className="w-4 h-4 text-warning-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Blockchain Validation</h3>
              <p className="text-sm text-muted-foreground">
                24/7 Remote Operations
              </p>
              <div className="bg-gradient-card rounded-lg p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Efficiency</span>
                  <span className="text-success font-bold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Central Value Flow */}
      <div className="relative bg-gradient-card rounded-xl p-8 shadow-cosmic border border-primary/20">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold gradient-text mb-2">The ORION Advantage</h4>
          <p className="text-muted-foreground">
            Why remote validators with renewable energy generate more value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="w-8 h-8 text-success" />
            </div>
            <h5 className="font-semibold">Lower Costs</h5>
            <p className="text-sm text-muted-foreground">
              No electricity bills mean higher profit margins
            </p>
            <div className="text-lg font-bold text-success">+40% ROI</div>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h5 className="font-semibold">True Decentralization</h5>
            <p className="text-sm text-muted-foreground">
              Remote locations strengthen network resilience
            </p>
            <div className="text-lg font-bold text-primary">+Network Value</div>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-warning" />
            </div>
            <h5 className="font-semibold">Future-Proof</h5>
            <p className="text-sm text-muted-foreground">
              ESG compliance increases validator value
            </p>
            <div className="text-lg font-bold text-warning">+Premium Rewards</div>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h5 className="font-semibold">Zero Maintenance</h5>
            <p className="text-sm text-muted-foreground">
              Autonomous operation with remote monitoring
            </p>
            <div className="text-lg font-bold text-accent">100% Passive</div>
          </div>
        </div>
      </div>

      {/* Investment Flow */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
            $1200
          </div>
          <p className="text-sm font-medium">Initial Investment</p>
          <p className="text-xs text-muted-foreground">One-time USDT payment</p>
        </div>
        
        <div className="flex justify-center items-center">
          <ArrowRight className="w-6 h-6 text-primary hidden lg:block" />
          <ArrowDown className="w-6 h-6 text-primary lg:hidden" />
        </div>
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto">
            <Zap className="w-6 h-6 text-success" />
          </div>
          <p className="text-sm font-medium">Deploy & Validate</p>
          <p className="text-xs text-muted-foreground">Automated setup</p>
        </div>
        
        <div className="flex justify-center items-center">
          <ArrowRight className="w-6 h-6 text-primary hidden lg:block" />
          <ArrowDown className="w-6 h-6 text-primary lg:hidden" />
        </div>
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
            8-12%
          </div>
          <p className="text-sm font-medium">Annual Returns</p>
          <p className="text-xs text-muted-foreground">Passive income stream</p>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionDiagram;